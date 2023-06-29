# Django Rest
from rest_framework.generics import (
    ListAPIView, 
    CreateAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView,
    RetrieveUpdateAPIView,
)
# Django
from django.shortcuts import render
# Models
from .models import PetModel
# Serializers
from .serializers import PetSerializers, PetCreateSerializers


class PetListApiView(ListAPIView):
    
    serializer_class = PetSerializers
    
    def get_queryset(self):

        return PetModel.objects.all()
    
    
class PetCreateApiView(CreateAPIView):
    
    serializer_class = PetCreateSerializers 
    
    
class PetRetriApiView(RetrieveAPIView):
    
    serializer_class = PetCreateSerializers
    queryset = PetModel.objects.all()
    


class PetDestroyApiView(DestroyAPIView):
    
    serializer_class = PetCreateSerializers
    queryset = PetModel.objects.all()
    

class PetUpdateApiView(RetrieveUpdateAPIView):
    
    serializer_class = PetCreateSerializers
    queryset = PetModel.objects.all()

