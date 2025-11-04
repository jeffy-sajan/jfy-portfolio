from rest_framework import serializers
from .models import Project, Contact


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'url', 'tech']


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message', 'created_at']
