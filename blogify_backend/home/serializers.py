from rest_framework import serializers
from .models import UserProfile, Post


class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(read_only=True, slug_field="username")

    class Meta:
        model = UserProfile
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer()

    class Meta:
        model = Post
        fields = "__all__"
