import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import slugify from 'slugify';
import { GetPostsQueryDto } from './dto/get-posts-query.dto';
import { nanoid } from 'nanoid';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(dto: CreatePostDto) {
    const slug = slugify(dto.title, {
      lower: true,
    });
    const uniqueSlug = slug + '-' + nanoid(6);
    const summary = dto.summary || dto.content.slice(0, 100);
    const newPost = await this.prisma.post.create({
      data: {
        ...dto,
        slug: uniqueSlug,
        summary,
      },
    });
    return newPost;
  }

  async getPostBySlug(slug: string) {
    const post = await this.prisma.post.findUnique({
      where: {
        slug,
      },
    });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async getPosts(query: GetPostsQueryDto) {
    const posts = await this.prisma.post.findMany({
      skip: query.offset,
      take: query.limit,
      orderBy: {
        createAt: 'desc',
      },
    });
    return posts;
  }
}
