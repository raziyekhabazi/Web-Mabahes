from django.urls import path
from .views import FoodList, FoodDetail, Reservation

app_name = "blog"

urlpatterns = [
	path("list", FoodList.as_view(), name="list"),
	path("<int:pk>", FoodDetail.as_view(), name="detail"),
	path("reservation/", Reservation.as_view(), name="reservation"),
]
