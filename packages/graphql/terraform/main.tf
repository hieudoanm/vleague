terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "vleague_graphql" {
  name      = "vleague-graphql"
  framework = "nextjs"
  team_id = "hieudoan"
  git_repository = {
    type = "github"
    repo = "hieudoanm/vleague"
  }
}

data "vercel_project_directory" "vleague_graphql" {
  path = "packages/graphql"
}

resource "vercel_deployment" "example" {
  project_id  = vercel_project.vleague_graphql.id
  files       = data.vercel_project_directory.vleague_graphql.files
  path_prefix = "packages/graphql"
  production  = true
}

resource "vercel_project_domain" "vleague_graphql" {
  project_id = vercel_project.vleague_graphql.id
  domain     = "vleague-graphql.vercel.app"
}
