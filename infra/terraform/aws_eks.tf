module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  version         = "~> 19.0"
  cluster_name    = "animaker-cluster-${var.environment}"
  cluster_version = "1.28"

  vpc_id     = var.vpc_id
  subnet_ids = var.subnet_ids

  eks_managed_node_groups = {
    default = {
      min_size     = 1
      max_size     = 4
      desired_size = 2

      instance_types = ["t3.medium"]
    }
    render_workers = {
      min_size     = 0
      max_size     = 5
      desired_size = 1

      instance_types = ["c6i.xlarge"] # Instance optimal untuk komputasi FFmpeg
      labels = {
        workload = "render"
      }
    }
  }

  tags = {
    Environment = var.environment
    Project     = "AnimakerClone"
  }
}
