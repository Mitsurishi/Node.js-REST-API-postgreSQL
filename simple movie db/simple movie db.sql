PGDMP         6                {            simple_movie_database    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16612    simple_movie_database    DATABASE     �   CREATE DATABASE simple_movie_database WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 %   DROP DATABASE simple_movie_database;
                postgres    false            �            1259    16622    film    TABLE     i   CREATE TABLE public.film (
    id integer NOT NULL,
    name text NOT NULL,
    year integer NOT NULL
);
    DROP TABLE public.film;
       public         heap    postgres    false            �            1259    16654 
   film_genre    TABLE     `   CREATE TABLE public.film_genre (
    film_id integer NOT NULL,
    genre_id integer NOT NULL
);
    DROP TABLE public.film_genre;
       public         heap    postgres    false            �            1259    16621    film_id_seq    SEQUENCE     �   ALTER TABLE public.film ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.film_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    16614    genre    TABLE     O   CREATE TABLE public.genre (
    id integer NOT NULL,
    name text NOT NULL
);
    DROP TABLE public.genre;
       public         heap    postgres    false            �            1259    16613    genre_id_seq    SEQUENCE     �   ALTER TABLE public.genre ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.genre_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215                      0    16622    film 
   TABLE DATA           .   COPY public.film (id, name, year) FROM stdin;
    public          postgres    false    217   �                 0    16654 
   film_genre 
   TABLE DATA           7   COPY public.film_genre (film_id, genre_id) FROM stdin;
    public          postgres    false    218                    0    16614    genre 
   TABLE DATA           )   COPY public.genre (id, name) FROM stdin;
    public          postgres    false    215   /                  0    0    film_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.film_id_seq', 10, true);
          public          postgres    false    216                       0    0    genre_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.genre_id_seq', 6, true);
          public          postgres    false    214            s           2606    16658    film_genre film_genre_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.film_genre
    ADD CONSTRAINT film_genre_pkey PRIMARY KEY (film_id, genre_id);
 D   ALTER TABLE ONLY public.film_genre DROP CONSTRAINT film_genre_pkey;
       public            postgres    false    218    218            q           2606    16628    film film_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.film
    ADD CONSTRAINT film_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.film DROP CONSTRAINT film_pkey;
       public            postgres    false    217            o           2606    16620    genre genre_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.genre DROP CONSTRAINT genre_pkey;
       public            postgres    false    215            t           2606    16669    film_genre fk_film_genre_film    FK CONSTRAINT     �   ALTER TABLE ONLY public.film_genre
    ADD CONSTRAINT fk_film_genre_film FOREIGN KEY (film_id) REFERENCES public.film(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 G   ALTER TABLE ONLY public.film_genre DROP CONSTRAINT fk_film_genre_film;
       public          postgres    false    3185    218    217            u           2606    16674    film_genre fk_film_genre_genre    FK CONSTRAINT     �   ALTER TABLE ONLY public.film_genre
    ADD CONSTRAINT fk_film_genre_genre FOREIGN KEY (genre_id) REFERENCES public.genre(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 H   ALTER TABLE ONLY public.film_genre DROP CONSTRAINT fk_film_genre_genre;
       public          postgres    false    215    3183    218               I   x�3���K��/J-I-.�4200�2�L���M��MM��p��E2��8--,�,�" �[�q��qqq {C�            x�3�4����� �$         2   x�3�L)J�M�2��M�ɇ��9SRKR�K2�R�L8�R���3��b���� `�-     