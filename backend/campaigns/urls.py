from django.urls import path
from .views import *

urlpatterns = [
    path("campaigns", CampaignListAPIView.as_view(), name="campaigns"),
    path("campaigns/<str:slug>", CampaignDetailAPIView.as_view(), name="campaign"),
    path("subscribers", SuscribeToCampaignAPIView.as_view(), name="subscribe"),
]
