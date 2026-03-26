"use client";

import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isDarkTheme?: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isDarkTheme = false,
}: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Show limited page numbers on mobile (current, prev, next)
  // Show all on desktop
  const showPageNumbers = totalPages <= 7 
    ? pageNumbers 
    : pageNumbers.filter(
        (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1
      );

  const textColor = isDarkTheme ? "text-light-300" : "text-blog-text-muted";
  const activeTextColor = isDarkTheme ? "text-white bg-cyan-400/20" : "text-blog-text bg-blog-tan-400/20";
  const hoverBgColor = isDarkTheme ? "hover:bg-white/5" : "hover:bg-blog-cream-200";
  const borderColor = isDarkTheme ? "border-white/10" : "border-blog-divider";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-6"
    >
      {/* Page Numbers */}
      <div className={`flex items-center gap-2 flex-wrap justify-center`}>
        {/* Previous Button */}
        <motion.button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
          whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
          className={`p-2 rounded-lg border ${borderColor} ${
            currentPage === 1
              ? isDarkTheme
                ? "text-light-400 cursor-not-allowed opacity-50"
                : "text-blog-text-light cursor-not-allowed opacity-50"
              : `${textColor} ${hoverBgColor}`
          } transition-colors`}
        >
          <HiChevronLeft className="text-lg" />
        </motion.button>

        {/* Page Number Dots if many pages */}
        {totalPages > 7 && currentPage > 3 && (
          <span className={`px-2 py-2 ${textColor}`}>...</span>
        )}

        {/* Page Numbers */}
        {showPageNumbers.map((page) => (
          <motion.button
            key={page}
            onClick={() => onPageChange(page)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 rounded-lg border font-medium transition-colors ${
              currentPage === page
                ? `${activeTextColor} border-blog-tan-400`
                : `${textColor} border-${isDarkTheme ? "white/10" : "blog-divider"} ${hoverBgColor}`
            }`}
          >
            {page}
          </motion.button>
        ))}

        {/* Page Number Dots if many pages */}
        {totalPages > 7 && currentPage < totalPages - 2 && (
          <span className={`px-2 py-2 ${textColor}`}>...</span>
        )}

        {/* Next Button */}
        <motion.button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
          whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
          className={`p-2 rounded-lg border ${borderColor} ${
            currentPage === totalPages
              ? isDarkTheme
                ? "text-light-400 cursor-not-allowed opacity-50"
                : "text-blog-text-light cursor-not-allowed opacity-50"
              : `${textColor} ${hoverBgColor}`
          } transition-colors`}
        >
          <HiChevronRight className="text-lg" />
        </motion.button>
      </div>

      {/* Page Info */}
      <div className={`text-sm ${textColor}`}>
        Page <span className="font-semibold">{currentPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </div>
    </motion.div>
  );
}
