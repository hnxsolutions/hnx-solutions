"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiHeart, HiChatBubbleLeftEllipsis } from "react-icons/hi2";

interface BlogEngagementProps {
  slug: string;
  isDarkTheme?: boolean;
  layout?: "horizontal" | "vertical";
  hideComment?: boolean;
}

interface EngagementData {
  likes: number;
  comments: number;
  userLiked?: boolean;
}

export default function BlogEngagement({
  slug,
  isDarkTheme = false,
  layout = "horizontal",
  hideComment = true,
}: BlogEngagementProps) {
  const [engagement, setEngagement] = useState<EngagementData>({
    likes: 0,
    comments: 0,
    userLiked: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isLiking, setIsLiking] = useState(false);

  // Fetch engagement data on mount
  useEffect(() => {
    const fetchEngagement = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}/engagement`);
        if (res.ok) {
          const data = await res.json();
          setEngagement(data);
        }
      } catch (err) {
        console.error("Failed to fetch engagement:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEngagement();
  }, [slug]);

  // Handle like click - toggle like
  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiking) return;

    setIsLiking(true);
    
    // Optimistic update: show the change immediately
    const previousEngagement = engagement;
    const newEngagement = {
      likes: engagement.userLiked ? engagement.likes - 1 : engagement.likes + 1,
      comments: engagement.comments,
      userLiked: !engagement.userLiked,
    };
    setEngagement(newEngagement);

    try {
      const res = await fetch(`/api/blogs/${slug}/engagement`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "like" }),
      });

      if (res.ok) {
        const data = await res.json();
        setEngagement(data);
      } else {
        // Revert to previous state on error
        setEngagement(previousEngagement);
      }
    } catch (err) {
      console.error("Failed to toggle like:", err);
      // Revert to previous state on error
      setEngagement(previousEngagement);
    } finally {
      setIsLiking(false);
    }
  };

  // Handle comment click - display only for now
  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Reserved for future functionality
  };

  const iconColor = isDarkTheme ? "text-light-300" : "text-blog-text-muted";
  const containerClass = layout === "horizontal" ? "flex items-center gap-4" : "flex flex-col gap-4";

  if (isLoading) {
    return (
      <div className={containerClass}>
        <div className={`animate-pulse h-5 w-16 bg-${isDarkTheme ? "white/10" : "blog-divider"} rounded`} />
        <div className={`animate-pulse h-5 w-16 bg-${isDarkTheme ? "white/10" : "blog-divider"} rounded`} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={containerClass}
    >
      {/* Like Button */}
      <motion.button
        onClick={handleLike}
        disabled={isLiking}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          engagement.userLiked
            ? isDarkTheme
              ? "text-cyan-400 bg-cyan-400/10"
              : "text-blog-tan-600 bg-blog-tan-400/10"
            : `${iconColor} hover:${isDarkTheme ? "text-cyan-400 hover:bg-cyan-400/10" : "text-blog-tan-600 hover:bg-blog-tan-400/10"}`
        } cursor-pointer disabled:opacity-50`}
        title="Like this article"
      >
        <motion.div
          animate={
            engagement.userLiked ? { scale: [1, 1.2, 1] } : { scale: 1 }
          }
          transition={{ duration: 0.3 }}
        >
          <HiHeart
            className={`text-lg ${engagement.userLiked ? "fill-current" : ""}`}
          />
        </motion.div>
        <span className="text-sm font-medium">{engagement.likes}</span>
      </motion.button>

      {/* Comment Button */}
      {!hideComment && (
      <motion.button
        onClick={handleComment}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          isDarkTheme 
            ? "text-light-300 bg-white/5 hover:text-cyan-400 hover:bg-cyan-400/10" 
            : `${iconColor} bg-blog-cream-100 hover:text-blog-tan-600 hover:bg-blog-tan-400/10`
        } cursor-pointer`}
        title="Add a comment"
      >
        <HiChatBubbleLeftEllipsis className={`text-lg`} />
        <span className={`text-sm font-medium`}>
          {engagement.comments}
        </span>
      </motion.button>
      )}
    </motion.div>
  );
}
