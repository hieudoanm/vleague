import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { getVideos } from './videos.service';
import { Video } from './videos.types';

@Route('api/videos')
@Tags('Videos')
export class VideosController extends Controller {
  @Get()
  public async getVideos(
    @Query('maxResults') maxResults: number
  ): Promise<{ total: number; data: Video[] }> {
    const videos = await getVideos({ maxResults });
    return { total: videos.length, data: videos };
  }
}
