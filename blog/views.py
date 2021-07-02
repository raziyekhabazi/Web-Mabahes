from rest_framework import generics
from .models import *
from .serializer import *


class FoodList(generics.ListAPIView):
	queryset = Food.objects.all()
	serializer_class = FoodSerialiser


class FoodDetail(generics.RetrieveAPIView):
	queryset = Food.objects.all()
	serializer_class = FoodSerialiser
	# lookup_field = "slug"


class Reservation(generics.CreateAPIView):
	queryset = Customer.objects.all()
	serializer_class = CustomerSerialiser
