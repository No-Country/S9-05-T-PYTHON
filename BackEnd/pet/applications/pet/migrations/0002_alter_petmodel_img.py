# Generated by Django 4.2.2 on 2023-07-18 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='petmodel',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='pet/', verbose_name='Avatar'),
        ),
    ]
