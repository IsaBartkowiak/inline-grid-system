
#Inline-block grid system

Inline-block grid system is an alternative to bootstrap for creating columns. It is a simple and lightweight grid system with 12 columns managed with inline-block. You can easily create your own grid system, see examples below. NB: Only the bootstrap class `.container` was preserved.

**Advantages :**

 - No Float  
 - Custom gutters

----------


###Basic markup

**La seule contrainte est de créer une div contenant vos colonnes (qui servira de row). Vos colonnes doivent avoir la classe ".col"**

```html
<div class="grid">
	<div class="col"></div>
	<div class="col"></div>
	<div class="col"></div>
	<div class="col"></div>
</div>
```
SCSS
```scss
.grid{
	@include grid($col, $gutter);
}
```
LESS
```less
.grid{
	.grid(@col, @gutter)
}
```
*Make @col columns

Variables| Description| Unit | Default value
--- | --- | --- | --- |
`$col` | desired columns, like bootstrap | integer  | none
`$gutter` | column spacing | pixel | 30px


###Breakpoint management
SCSS
```scss
.grid{
	@include become-grid($col, $gutter, $breakpoint);
}
```

LESS
```less
.grid{
	.become-grid(@col, @gutter, @breakpoint);
}
```
*Become a col `@int` less than `@responsive` pixel width*

Variables| Description| Unit | Default value
--- | --- | --- | --- |
`$col` | desired columns, like bootstrap | integer  | none
`$gutter` | column spacing | pixel | 30px
``$breakpoint` | responsive breakpoint | pixel | none

**WARNING:  Use this mixin only if a grid is initialized**

----------


### Some examples


####Basic responsive columns with container
HTML

```html
<div class="container"> //container like bootstrap
	<div class="bloc-grid">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
	</div>
</div>
```

SCSS

```scss
.bloc{
	&-grid{
		@include grid(4,30);
		@include become-grid(12,30,768);
	}	
}
```


LESS

```less
.bloc{
	&-grid{
		.grid(4,30);
		.include become-grid(12,30,768);
	}	
}
```

>In this example, there are 3 columns per line with a 30px spacing and responsive about 768px. **See the result :**

![Inline grid system, example 1](http://www.zupimages.net/up/15/29/kx0l.jpg)

####Responsive columns fullscreen without spacing
HTML

```html
<div class="bloc">
	<div class="bloc-grid">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
	</div>
</div>
```

SCSS

```scss
.bloc{	
	&-grid{
		@include grid(4,0);
		@include become-grid(12,0,768);
	}
}
```

LESS

```less
.bloc{	
	&-grid{
		.grid(4,0);
		.become-grid(12,0,768);
	}
}
```

> In this example, there are 3 columns per line,  fullscreen and responsive about 768px.

![enter image description here](http://zupimages.net/up/15/29/34ww.jpg) 
####Custom responsive breakpoint
HTML

```html
<div class="bloc">
	<div class="bloc-grid">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
	</div>
</div>
```
SCSS

```scss
.bloc{	
	&-grid{
		@include grid(4,30);
		@include become-grid(6,800);
		@include become-grid(12,30);
	}
}
```



LESS

```less
.bloc{	
	&-grid{
		.grid(4,30);
		.become-grid(6,800);
		.become-grid(12,30);
	}
}
```

> In this example, there are 3 columns per line with a 30px gutter. 
> Under 800px width, there are 2 columns per line.
> Under 400px width, there are 1 column per line.

####Create your own grid system

SCSS

```scss

@for $i from 1 through 12 {
 	.grid-#{$i} { 
 		@include grid(#{$i}, 30);
 	}
 }

@for $i from 1 through 12 {
 	.md-grid-#{$i} { 
 		@include become-grid(#{$i}, 30, 992);
 	}
}

@for $i from 1 through 12 {
 	.xs-grid-#{$i} { 
 		@include become-grid(#{$i}, 30, 768);
 	}
}
```

LESS

```less
/******* cols ******/
.grid{
	&-1{
		.grid(1,30); 
	}
	&-2{
		.grid(2,30); 
	}
	&-3{
		.grid(3,30); 
	}
	&-4{
		.grid(4,30); 
	}
	...
}

/******* responsive ******/

.md-grid{
	&-12{
		.become-grid(12,992); 
	}
	&-6{
		.become-grid(6,992); 
	}
	&-4{
		.become-grid(4,992); 
	}
}
.xs-grid{
	&-12{
		.become-grid(12,768); 
	}
	&-6{
		.become-grid(6,768); 
	}
	&-4{
		.become-grid(4,768); 
	}
}
```

HTML

```html
<div class="container">
	<div class="grid-3 xs-grid-6 md-grid-12">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
	</div>
</div>
```

**Create columns with your own gutter and your own breakpoint !**

> In this example, there are 3 columns per line with a 30px gutter. 
> Under 992px width, there are 2 columns per line.
> Under 768px width, there are 1 column per line.




####Developer

Developed by Isadora Bartkowiak.
Help is welcome for the english translation.