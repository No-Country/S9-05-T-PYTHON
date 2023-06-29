from rest_framework import serializers
from .models import PetModel

class PetSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = PetModel
        fields =(
            'id',
            'img',
            'full_name',
            'breed',
            'gender',
            'age',
        )


class PetCreateSerializers(serializers.ModelSerializer): 

    class Meta:
        model = PetModel
        fields =('__all__')
