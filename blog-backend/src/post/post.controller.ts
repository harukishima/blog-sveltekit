import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostsQueryDto } from './dto/get-posts-query.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }

  @Get('/:slug')
  getPostBySlug(@Param('slug') slug: string) {
    return this.postService.getPostBySlug(slug);
  }

  @Get('/')
  getPosts(@Query() query: GetPostsQueryDto) {
    return this.postService.getPosts(query);
  }
}
