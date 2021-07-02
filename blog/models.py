from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Food(models.Model):
	title = models.CharField(max_length=250)
	author = models.ForeignKey(User, on_delete=models.CASCADE)
	imgThumb = models.ImageField(upload_to='files/imgThumb/',null=True,blank=True)
	recipes = models.TextField(null=True,blank=True)
	ingredient = models.TextField(null=True,blank=True)
	publish = models.DateTimeField(default=timezone.now)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	status = models.BooleanField(default=False)

	def __str__(self):
		return self.title


class Customer(models.Model):
	name = models.CharField(max_length=250)
	email = models.EmailField()
	phone = models.IntegerField(max_length=11)
	description = models.TextField(null=True,blank=True)

	def __str__(self):
		return self.title