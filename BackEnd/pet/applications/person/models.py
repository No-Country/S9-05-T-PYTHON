from django.db import models



class PersonModel(models.Model):
    
    """Model definition for Person."""
    first_name = models.CharField(
        'Name', 
        max_length=50
    )
    last_name = models.CharField(
        'Last Name', 
        max_length=50
    )
    email = models.EmailField(
        'Email', 
        max_length=254
    )
    edad = models.PositiveIntegerField(default=0)
    nationality = models.CharField(
        'Nationality', 
        max_length=20
    )
    


    def __str__(self):
        """Unicode representation of Person."""
        return self.first_name