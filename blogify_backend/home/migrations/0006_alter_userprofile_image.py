# Generated by Django 4.2.6 on 2023-10-13 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_userprofile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='image',
            field=models.ImageField(default='default.png', upload_to='profiles/'),
        ),
    ]
