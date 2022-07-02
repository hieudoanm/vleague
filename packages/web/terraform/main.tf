terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "vleague_web" {
  name      = "vleague-web"
  framework = "nextjs"
  team_id = "hieudoan"
  git_repository = {
    type = "github"
    repo = "hieudoanm/vleague"
  }
}

data "vercel_project_directory" "vleague_web" {
  path = "packages/web"
}

resource "vercel_deployment" "example" {
  project_id  = vercel_project.vleague_web.id
  files       = data.vercel_project_directory.vleague_web.files
  path_prefix = "packages/web"
  production  = true
}

resource "vercel_project_domain" "vleague_web" {
  project_id = vercel_project.vleague_web.id
  domain     = "vleague.vercel.app"
}
