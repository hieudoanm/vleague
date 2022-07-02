terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "vleague_server" {
  name      = "vleague-server"
  framework = "nextjs"
  team_id = "hieudoan"
  git_repository = {
    type = "github"
    repo = "hieudoanm/vleague"
  }
}

data "vercel_project_directory" "vleague_server" {
  path = "packages/server"
}

resource "vercel_deployment" "example" {
  project_id  = vercel_project.vleague_server.id
  files       = data.vercel_project_directory.vleague_server.files
  path_prefix = "packages/server"
  production  = true
}

resource "vercel_project_domain" "vleague_server" {
  project_id = vercel_project.vleague_server.id
  domain     = "vleague-server.vercel.app"
}
