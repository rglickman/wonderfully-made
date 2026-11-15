#!/usr/bin/env bash
# ============================================================================
# Optional Helper: Download Legacy WordPress Media Assets
# Run this on your local machine before turning off the old WordPress server
# if you would like to archive all original /wp-content/uploads/ images locally.
# ============================================================================
set -euo pipefail

DEST_DIR="public/assets/images/wp-archive"
mkdir -p "$DEST_DIR"

echo "Fetching media list from http://wonderfully-made.org/wp-json/wp/v2/media..."
curl -sL "http://wonderfully-made.org/wp-json/wp/v2/media?per_page=100" \
  | grep -oE 'https?://wonderfully-made\.org/wp-content/uploads/[^"]+' \
  | sort -u \
  | while read -r img_url; do
      filename=$(basename "$img_url")
      echo "Downloading $filename..."
      curl -sL "$img_url" -o "$DEST_DIR/$filename"
    done

echo "Done! Original WordPress media files saved in $DEST_DIR"
