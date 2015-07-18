
#Inline-block grid system

Inline-block grid system is an alternative to bootstrap for creating columns. It is a simple and lightweight grid system with 12 columns managed with inline-block. You can easily create your own grid system, see examples below. NB: Only the bootstrap class `.container` was preserved.

**Advantages :**

 - No Float  
 - Custom gutters

----------
##Live demo
SOON

##Usage

###Basic columns & rows
```less
.row(@gutter);
.col(@int, @gutter);
```
*Make me a row with a `@gutter` pixel gutter*
*Make me a col `@int` with a `@gutter` pixel gutter*
Variables| Description| Unit | Default value
--- | --- | --- | --- |
`@gutter` | column spacing | pixel | 30px
`@int` | desired columns, like bootstrap | integer  | none

**WARNING:  the `@gutter`  must be the same as the column**

###Breakpoint management
```less
.become-col(@int, @responsive);
```
*Become a col `@int` less than `@responsive` pixel width*
Variables| Description| Unit | Default value
--- | --- | --- | --- |
`@int` | desired columns, like bootstrap | integer  | none
``@responsive` | responsive breakpoint | pixel | none

**WARNING:  Use this mixin only if a .col() is initialized**

###Responsive columns
```less
.col-responsive(@int, @responsive, @gutter);
```
*Make a col `@int` with a `@gutter` pixel gutter and will be 100% width less than `@responsive` pixels*
Variables| Description| Unit | Default value
--- | --- | --- | --- |
`@responsive` | screen width where the column will be 100% width | pixel | 768px
`@gutter` | column spacing | pixel | 30px
`@int` | desired columns, like bootstrap | integer | none

**WARNING:  the `@gutter`  and `@responsive` and must be the same as the column**

----------


### Some examples


####Basic responsive columns with container
HTML

```html
<div class="bloc container"> //container like bootstrap
	<div class="bloc-row">
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
	</div>
</div>
```
LESS

```less
.bloc{
	&-row{
		.row(15);
	}	
	&-column{
		.col-responsive(4, 768, 15);
	}
}
```

>In this example, there are 3 columns per line with a 15px spacing and responsive about 768px. **See the result :**

![Inline grid system, example 1](http://www.zupimages.net/up/15/29/kx0l.jpg)

####Responsive columns fullscreen without spacing
HTML

```html
<div class="bloc">
	<div class="bloc-row">
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
	</div>
</div>
```
LESS

```less
.bloc{
	&-row{
		.row(0);
	}	
	&-column{
		.col-responsive(4, 768, 0);
	}
}
```

> In this example, there are 3 columns per line,  fullscreen and responsive about 768px.

![enter image description here](http://zupimages.net/up/15/29/34ww.jpg) 
####Custom responsive breakpoint
HTML

```html
<div class="bloc">
	<div class="bloc-row">
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
		<div class="bloc-column"></div>
	</div>
</div>
```
LESS

```less
.bloc{
	&-row{
		.row(30);
	}	
	&-column{
		.col(4,30);
		.become-col(6,800);
		.become-col(12,30);
	}
}
```

> In this example, there are 3 columns per line with a 30px gutter. 
> Under 800px width, there are 2 columns per line.
> Under 400px width, there are 1 column per line.

####Create your own grid system

LESS

```less
/******* row ******/
.row-g30{
	.row(30);
}
.row-g0{
	.row(0);
}

/******* cols ******/
.col-g30{
	&-1{
		.col(1,30); 
	}
	&-2{
		.col(2,30); 
	}
	&-3{
		.col(3,30); 
	}
	&-4{
		.col(4,30); 
	}
	...
}

/******* responsive ******/
.md{
	&-12{
		.become-col(12,992); 
	}
	&-6{
		.become-col(6,992); 
	}
	&-4{
		.become-col(4,992); 
	}
}
.xs{
	&-12{
		.become-col(12,768); 
	}
	&-6{
		.become-col(6,768); 
	}
	&-4{
		.become-col(4,768); 
	}
}


```
HTML

```html
<div class="container">
	<div class="row-g30">
		<div class="col-g30-4 md-6 xs-12"></div>
		<div class="col-g30-4 md-6 xs-12"></div>
		<div class="col-g30-4 md-6 xs-12"></div>
		<div class="col-g30-4 md-6 xs-12"></div>
		<div class="col-g30-4 md-6 xs-12"></div>
		<div class="col-g30-4 md-6 xs-12"></div>
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