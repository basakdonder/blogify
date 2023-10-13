from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import UserProfileSerializer, PostSerializer
from .models import Post, UserProfile


# Create your views here.
@api_view(["GET"])
def apiOverview(request):
    api_urls = {
        "List": "/post-list/",
        "Detail View": "/post-detail/<str:pk>/",
        "Create": "/post-create/",
        "Update": "/post-update/<str:pk>/",
        "Delete": "/post-delete/<str:pk>/",
    }
    return Response(api_urls)


@api_view(["GET"])
def userList(request):
    users = UserProfile.objects.all()
    serializer = UserProfileSerializer(users, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def postList(request):
    posts = Post.objects.filter(status=1)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)
