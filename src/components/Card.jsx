// components/StackCard.jsx

import React from "react";
import { ThumbsUp, Layers, Users } from "lucide-react";

const coverImageUrl="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"

const StackCard = ({
  title,
  description,
  upvoteCount,
  cardCount,
  clonerCount,
  stackerName,
  stackerAvatarUrl,
  onClick,
}) => {
  return (
    <div
      className="bg-white rounded-[12px] shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01] h-[270px] w-[270px]"
      onClick={onClick}
    >
      {/* Cover Image */}
      {coverImageUrl && (
        <div className="w-full bg-gray-200 overflow-hidden h-[140px]">
          <img
            src={coverImageUrl}
            alt="title"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content Area */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          title
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {description}
        </p>

        {/* Bottom Section */}
        <div className="flex justify-between items-end pt-4 border-t border-gray-100">
          {/* Stacker Info */}
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-gray-300 overflow-hidden">
              {stackerAvatarUrl ? (
                <img
                  src={stackerAvatarUrl}
                  alt={stackerName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Users className="h-4 w-4 text-white p-1" />
              )}
            </div>
            <span className="text-xs font-medium text-gray-700">
              {stackerName}
            </span>
          </div>

          {/* Stats */}
          <div className="flex space-x-4 text-sm text-gray-500">
            {/* Upvotes */}
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1 text-red-500" />
              <span className="font-semibold text-gray-700">
                {upvoteCount?.toLocaleString?.() ?? upvoteCount}
              </span>
            </div>

            {/* Card Count */}
            <div className="flex items-center">
              <Layers className="h-4 w-4 mr-1" />
              <span>{cardCount}</span>
            </div>

            {/* Cloner Count */}
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{clonerCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
