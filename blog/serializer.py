from rest_framework import serializers
from blog.models import *


class FoodSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = "__all__"


class CustomerSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"
