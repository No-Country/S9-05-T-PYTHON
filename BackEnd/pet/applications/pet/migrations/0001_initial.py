# Generated by Django 4.2.2 on 2023-07-10 18:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('person', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='PetModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(blank=True, null=True, upload_to='pet', verbose_name='Avatar')),
                ('full_name', models.CharField(max_length=50, verbose_name='Name')),
                ('breed', models.CharField(blank=True, max_length=50, verbose_name='Breed')),
                ('gender', models.CharField(blank=True, choices=[('Male', 'Male'), ('Famele', 'Famele')], max_length=10, null=True, verbose_name='Gender')),
                ('age', models.PositiveIntegerField(default=0)),
                ('nationality', models.CharField(blank=True, max_length=50, verbose_name='Nationality')),
                ('vaccination_record', models.ImageField(blank=True, null=True, upload_to='pet', verbose_name='Vaccination Record')),
                ('chip', models.BooleanField()),
                ('date_vaccine', models.CharField(blank=True, max_length=50, verbose_name='Last Vaccine')),
                ('last_vaccination', models.DateField(blank=True, null=True, verbose_name='Date last Vaccine')),
                ('date_vaccine1', models.CharField(blank=True, max_length=50, verbose_name='Next Vaccine')),
                ('next_vaccine', models.DateField(blank=True, null=True, verbose_name='Date Next Vaccine')),
                ('img_pet', models.ImageField(blank=True, null=True, upload_to='pet', verbose_name='Img Pet')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='person.personmodel')),
            ],
            options={
                'verbose_name': 'Pet',
                'verbose_name_plural': 'Pets',
            },
        ),
    ]
