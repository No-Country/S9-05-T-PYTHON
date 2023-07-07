from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
        
class RegistrationSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('username','email','password',)
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = User(username=self.validated_data['username'])
        
        password = self.validated_data['password']
        email=self.validated_data['email']
        
        user.email = email
        user.set_password(password)
        user.save()
        return user