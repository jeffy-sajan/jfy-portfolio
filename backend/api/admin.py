from django.contrib import admin
from .models import Project, Contact


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'url')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'created_at')
