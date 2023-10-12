from django.shortcuts import render
from django.http import JsonResponse
from .models import Post


# Create your views here.
def api_posts(request):
    post_list = Post.objects.filter(status=1)
    posts = []

    for post in post_list:
        new_post_dict = {}
        new_post_dict["title"] = post.title
        new_post_dict["slug"] = post.slug
        new_post_dict["author"] = post.author.username
        new_post_dict["updated_on"] = post.updated_on
        new_post_dict["content"] = post.content
        new_post_dict["created_on"] = post.created_on
        posts.append(new_post_dict)
    return JsonResponse({"data": list(posts)}, safe=False)
