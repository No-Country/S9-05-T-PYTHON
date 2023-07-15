from rest_framework import serializers
from .models import PetModel
from applications.person.serializer import RegistrationSerializer
class PetSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = PetModel
        fields =(
            'id',
            'img',
            'full_name',
            'breed',
            'gender',
            'description',
        )


class PetCreateSerializers(serializers.ModelSerializer): 

    class Meta:
        model = PetModel
        fields =(
            '__all__'
        )


class PetDetailSerializers(serializers.ModelSerializer): 

    owner = RegistrationSerializer()

    class Meta:
        model = PetModel
        fields =(
            'id',
            'img',
            'full_name',
            'description',
            'breed',
            'gender',
            'age',
            'weight',
            'nationality',
            'vaccination_record',
            'chip',
            'date_vaccine',
            'last_vaccination',
            'date_vaccine1',
            'next_vaccine',
            'owner',
            'img_pet1',
            'img_pet2',
            'img_pet3',
            'img_pet4',
            'img_pet5',
        )
        
