from django.db import models

# Create your models here.

class User(models.Model):
  title = models.CharField(max_length=200)
  pressed = models.BigIntegerField(default=0)
  completed = models.BooleanField(default=False, blank=True, null=True)
      
  def __str__(self):
    return self.title