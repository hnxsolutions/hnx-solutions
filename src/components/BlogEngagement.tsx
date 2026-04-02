"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiHeart, HiChatBubbleLeftEllipsis } from "react-icons/hi2";

interface BlogEngagementProps {
  slug: string;
  isDarkTheme?: boolean;
  layout?: "horizontal" | "vertical";
  hideComment?: boolean;
  lazy?: boolean;
}

interface EngagementData {
  likes: number;
  comments: number;
  userLiked?: boolean;
}

const engagementCache = new Map<string, EngagementData>();

export default function BlogEngagement({
  slug,
  isDarkTheme = false,
  layout = "horizontal",
  hideComment = true,
  lazy = true,
}: BlogEngagementProps) {
  const [engagement, setEngagement] = useState<EngagementData>({
    likes: 0,
    comments: 0,
    userLiked: false,
  });
  const [isLoading, setIsLoading] = useState(lazy);
  const [isLiking, setIsLiking] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(!lazy);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    const cached = engagementCache.get(slug);
    if (cached) {
      setEngagement(cached);
      setIsLoading(false);
      hasFetchedRef.current = true;
      return;
    }

    if (!lazy) {
      setShouldFetch(true);
      return;
    }

    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldFetch(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "240px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [slug, lazy]);

  useEffect(() => {
    if (!shouldFetch || hasFetchedRef.current) return;

    let isMounted = true;
    const controller = new AbortController();

    const fetchEngagement = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(`/api/blogs/${slug}/engagement`, {
          method: "GET",
          signal: controller.signal,
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch engagement");
        }

        const data = (await res.json()) as EngagementData;

        if (!isMounted) return;

        engagementCache.set(slug, data);
        setEngagement(data);
        hasFetchedRef.current = true;
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Failed to fetch engagement:", err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchEngagement();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [shouldFetch, slug]);

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiking) return;

    setIsLiking(true);

    const previousEngagement = engagement;
    const optimisticEngagement: EngagementData = {
      likes: engagement.userLiked ? Math.max(0, engagement.likes - 1) : engagement.likes + 1,
      comments: engagement.comments,
      userLiked: !engagement.userLiked,
    };

    setEngagement(optimisticEngagement);
    engagementCache.set(slug, optimisticEngagement);

    try {
      const res = await fetch(`/api/blogs/${slug}/engagement`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "like" }),
      });

      if (!res.ok) {
        throw new Error("Failed to toggle like");
      }

      const data = (await res.json()) as EngagementData;
      setEngagement(data);
      engagementCache.set(slug, data);
    } catch (err) {
      console.error("Failed to toggle like:", err);
      setEngagement(previousEngagement);
      engagementCache.set(slug, previousEngagement);
    } finally {
      setIsLiking(false);
    }
  };

  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const iconColor = isDarkTheme ? "text-light-300" : "text-blog-text-muted";
  const containerClass =
    layout === "horizontal" ? "flex items-center gap-4" : "flex flex-col gap-4";

  const skeletonClass = isDarkTheme ? "bg-white/10" : "bg-blog-divider";

  if (isLoading) {
    return (
      <div ref={rootRef} className={containerClass} aria-hidden="true">
        <div className={`h-10 w-19 animate-pulse rounded-lg ${skeletonClass}`} />
        {!hideComment && (
          <div className={`h-10 w-19 animate-pulse rounded-lg ${skeletonClass}`} />
        )}
      </div>
    );
  }

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={containerClass}
    >
      <motion.button
        type="button"
        onClick={handleLike}
        disabled={isLiking}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
          engagement.userLiked
            ? isDarkTheme
              ? "bg-cyan-400/10 text-cyan-400"
              : "bg-blog-tan-400/10 text-blog-tan-600"
            : isDarkTheme
              ? "bg-white/5 text-light-300 hover:bg-cyan-400/10 hover:text-cyan-400"
              : "bg-blog-cream-100 text-blog-text-muted hover:bg-blog-tan-400/10 hover:text-blog-tan-600"
        } cursor-pointer disabled:opacity-50`}
        title="Like this article"
      >
        <motion.div
          animate={engagement.userLiked ? { scale: [1, 1.18, 1] } : { scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <HiHeart className={`text-lg ${engagement.userLiked ? "fill-current" : ""}`} />
        </motion.div>
        <span className="text-sm font-medium">{engagement.likes}</span>
      </motion.button>

      {!hideComment && (
        <motion.button
          type="button"
          onClick={handleComment}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
            isDarkTheme
              ? "bg-white/5 text-light-300 hover:bg-cyan-400/10 hover:text-cyan-400"
              : `${iconColor} bg-blog-cream-100 hover:bg-blog-tan-400/10 hover:text-blog-tan-600`
          } cursor-pointer`}
          title="Add a comment"
        >
          <HiChatBubbleLeftEllipsis className="text-lg" />
          <span className="text-sm font-medium">{engagement.comments}</span>
        </motion.button>
      )}
    </motion.div>
  );
}