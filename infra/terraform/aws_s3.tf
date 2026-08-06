resource "aws_s3_bucket" "animaker_assets" {
  bucket = "animaker-production-assets-${var.environment}"

  tags = {
    Environment = var.environment
    Project     = "AnimakerClone"
  }
}

resource "aws_s3_bucket_public_access_block" "assets_public_block" {
  bucket                  = aws_s3_bucket.animaker_assets.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
