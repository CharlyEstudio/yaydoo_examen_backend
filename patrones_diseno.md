---
Prueba Técnica YayDoo
Carlos Ramírez
25 de Marzo 2022
---

# PATRONES DE DISEÑO

## Proplema 1
> Un cliente requiere utilizar sendgrid para envíos de email, pero otro cliente requiere enviarlos por mandril. Se quiere evitar el uso de IF, y realizar un diseño en donde podamos utilizar más servicios en caso de que un cliente requiera alguno en específico  ¿Qué patrón de diseño utilizarías y por qué?<blockquote>Strategy, ya que permite manetener un conjunto de algoritmos de entre los cuales el objeto puede elegir aquel que le conviene e intercambiarlo dinámicamente según sus necesidades.</blockquote>

## Proplema 2
> Explica en tus propias palabras la diferencia entre Factory Method y Abstract Factory. Y proporciona un caso de uso.<blockquote>**Factory Method** fabrica objetos que tienen el mismo tipo de clase base y **Abstract Factory** fabrica uno o más objetos que pertenecen a una familia diferentes objetos relacionados entre si.</blockquote><blockquote>**Casos de Uso de Factory Method**: Crear un objeto que tiene muchas dependencias o configuración que debe hacerse al inicializarlo, o en donde hay diferentes formas o algoritmos para crear le objeto.</blockquote><blockquote>**Casos de Uso Abstract Factory**: Crear múltiples objetos de distintos tipos pero que tienen una relación o dependencia con otros; esto es, crear una familia de objetos.</blockquote>