# Generated by Django 4.2.2 on 2023-07-06 18:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet', '0002_alter_petmodel_owner'),
        ('applications_person', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PersonModel',
        ),
    ]
