
#Inline-block grid system

Inline-block grid system is an alternative to bootstrap for creating columns. It is a grid of 12 columns with custom gutters.

*Advantages :*

 - No Float  
 - Custom gutters

----------
##Live demo


##Usage

###Basic columns & rows
``` less
.row(@gutter)
.col(@int, @gutter)
```

 - **@gutter :** column spacing (px)
 -  **@int :** desired columns, like bootstrap (int)
 - **WARNING: ** the gutter must be the same as the column

###Responsive columns & rows
``` less
.row-responsive(@responsive, @gutter)
.col-responsive(@int, @responsive, @gutter)
```

 - **@responsive :** screen width where the column will be 100% width (px)
 - **@gutter :** column spacing (px)
 - **@int :** desired columns, like bootstrap (int)
 -** WARNING: ** the @gutter AND @responsive must be the same as the column

### Some examples


####Responsive columns with container
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
		.row-responsive(768, 15);
	}	
	&-column{
		.col-responsive(4, 768, 15);
	}
}
```

>In this example, there are 4 columns with a 15px spacing and responsive about 768px. **See the result :**

![Usage example Inline grid system](https://github.com/IsaBartkowiak/inline-grid-system/blob/master/img/example1.jpg?raw=true)

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
		.row-responsive(768, 15);
	}	
	&-column{
		.col-responsive(4, 768, 15);
	}
}
```

> In this example, there are 4 columns with a 15px spacing and responsive about 768px. **See the result:**

![usage example inline grid system with fullscreen columns](https://github.com/IsaBartkowiak/inline-grid-system/blob/master/img/example2.jpg?raw=true)


####Developer

Developed by Isadora Bartkowiak.