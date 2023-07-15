# Generated by Django 4.2.2 on 2023-07-15 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pet', '0002_alter_petmodel_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='petmodel',
            old_name='img_pet',
            new_name='img_pet1',
        ),
        migrations.AddField(
            model_name='petmodel',
            name='description',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='petmodel',
            name='img_pet2',
            field=models.ImageField(blank=True, null=True, upload_to='pet', verbose_name='Img Pet'),
        ),
        migrations.AddField(
            model_name='petmodel',
            name='img_pet3',
            field=models.ImageField(blank=True, null=True, upload_to='pet', verbose_name='Img Pet'),
        ),
        migrations.AddField(
            model_name='petmodel',
            name='img_pet4',
            field=models.ImageField(blank=True, null=True, upload_to='pet', verbose_name='Img Pet'),
        ),
        migrations.AddField(
            model_name='petmodel',
            name='img_pet5',
            field=models.ImageField(blank=True, null=True, upload_to='pet', verbose_name='Img Pet'),
        ),
    ]
