from django.db import models
from django.contrib.auth.models import User


STATUS = ((0, "Draft"), (1, "Publish"))


# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user")
    image = models.ImageField(upload_to="profiles/", default="profiles/default.png")

    def __str__(self):
        return self.user.username


class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="blog_posts", default=0)
    updated_on = models.DateTimeField(auto_now=True)
    content = models.TextField()
    image = models.ImageField(upload_to="posts/", null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        ordering = ["-created_on"]

    def __str__(self):
        return self.title
