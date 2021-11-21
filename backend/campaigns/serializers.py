from rest_framework import serializers
from .models import *


class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = "__all__"


class SuscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suscriber
        fields = "__all__"
