from email.policy import default
from pyexpat import model
from django.db import models
from tkinter import CASCADE
from datetime import date
from django.forms import ModelForm
from django.utils.text import slugify
from django.dispatch import receiver
from django.db.models import signals
from django.contrib.auth import get_user_model


class Website(models.Model):
    name = models.CharField(max_length=150)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField()

    def __str__(self):
        return self.name 
  


