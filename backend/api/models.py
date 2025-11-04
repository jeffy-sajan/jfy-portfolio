from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    url = models.URLField(blank=True)
    tech = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} <{self.email}>"
