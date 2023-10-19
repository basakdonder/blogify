from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Post, UserProfile


# Register your models here.
class PostAdmin(SummernoteModelAdmin, admin.ModelAdmin):
    list_display = ("title", "slug", "status", "created_on")
    list_filter = ("status",)
    search_fields = ["title", "content"]
    prepopulated_fields = {"slug": ("title",)}
    summernote_fields = ("content",)


admin.site.site_header = "Blogify Admin"
admin.site.index_title = "Blogify Admin Panel"
admin.site.register(Post, PostAdmin)
admin.site.register(UserProfile)
