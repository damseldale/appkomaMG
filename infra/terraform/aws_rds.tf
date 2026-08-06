resource "aws_db_instance" "animaker_db" {
  identifier             = "animaker-postgres-${var.environment}"
  engine                 = "postgres"
  engine_version         = "15.4"
  instance_class         = "db.t3.medium"
  allocated_storage      = 20
  max_allocated_storage  = 100
  username               = var.db_username
  password               = var.db_password
  skip_final_snapshot    = true
  publicly_accessible    = false

  tags = {
    Environment = var.environment
    Project     = "AnimakerClone"
  }
}
