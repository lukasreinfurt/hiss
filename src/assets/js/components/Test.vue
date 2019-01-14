<template>
	<div id="contentWrapper" class="flex-container">
		<header><NavBar :title="title" menu-button></NavBar></header>
		<div id="mainWrapper" class="flex-container">
			<main class="flex-container">
				<div>
					<h1>Test</h1>
					<button>Default</button> <button class="secondary">Default</button>
					<button class="primary">Default</button>
					<section class="flex-container horizontal wrap">
						<div class="shadow elevation1"></div>
						<div class="shadow elevation2"></div>
						<div class="shadow elevation3"></div>
						<div class="shadow elevation4"></div>
						<div class="shadow elevation5"></div>
					</section>
					<section class="flex-container horizontal wrap">
						<div class="color primary-1"></div>
						<div class="color primary-2"></div>
						<div class="color primary-3"></div>
						<div class="color primary-4"></div>
						<div class="color primary-5"></div>
						<div class="color primary-6"></div>
						<div class="color primary-7"></div>
						<div class="color primary-8"></div>
						<div class="color primary-9"></div>
						<button class="primary">GET STARTED</button>
						<div class="info primary">This is a test info component</div>
					</section>
					<section class="flex-container horizontal wrap">
						<div class="color neutral-1"></div>
						<div class="color neutral-2"></div>
						<div class="color neutral-3"></div>
						<div class="color neutral-4"></div>
						<div class="color neutral-5"></div>
						<div class="color neutral-6"></div>
						<div class="color neutral-7"></div>
						<div class="color neutral-8"></div>
						<div class="color neutral-9"></div>
						<button class="neutral">GET STARTED</button>
						<div class="info neutral">This is a test info component</div>
					</section>
					<section class="flex-container horizontal wrap">
						<div class="color accent-red-1"></div>
						<div class="color accent-red-2"></div>
						<div class="color accent-red-3"></div>
						<div class="color accent-red-4"></div>
						<div class="color accent-red-5"></div>
						<div class="color accent-red-6"></div>
						<div class="color accent-red-7"></div>
						<div class="color accent-red-8"></div>
						<div class="color accent-red-9"></div>
						<button class="accent-red">GET STARTED</button>
						<div class="info accent-red">This is a test info component</div>
					</section>
					<section class="flex-container horizontal wrap">
						<div class="color accent-yellow-1"></div>
						<div class="color accent-yellow-2"></div>
						<div class="color accent-yellow-3"></div>
						<div class="color accent-yellow-4"></div>
						<div class="color accent-yellow-5"></div>
						<div class="color accent-yellow-6"></div>
						<div class="color accent-yellow-7"></div>
						<div class="color accent-yellow-8"></div>
						<div class="color accent-yellow-9"></div>
						<button class="accent-yellow">GET STARTED</button>
						<div class="info accent-yellow">This is a test info component</div>
					</section>
					<section class="flex-container horizontal wrap">
						<div class="color accent-green-1"></div>
						<div class="color accent-green-2"></div>
						<div class="color accent-green-3"></div>
						<div class="color accent-green-4"></div>
						<div class="color accent-green-5"></div>
						<div class="color accent-green-6"></div>
						<div class="color accent-green-7"></div>
						<div class="color accent-green-8"></div>
						<div class="color accent-green-9"></div>
						<button class="accent-green">GET STARTED</button>
						<div class="info accent-green">This is a test info component</div>
					</section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
						ante in convallis hendrerit. Curabitur sagittis tortor vitae mi
						fermentum, id ultrices velit dictum. Aliquam sed viverra nisi.
						Vestibulum urna risus, ultrices eu bibendum eu, iaculis eu eros.
						Nunc ultricies massa vel lacus consectetur, volutpat consequat metus
						imperdiet. Orci varius natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Sed mattis bibendum lorem et
						aliquam. Aliquam sollicitudin turpis a odio feugiat interdum. Ut
						eleifend lorem ut enim blandit, in sagittis est fringilla. Nulla eu
						urna sed tortor consectetur pellentesque. Suspendisse dui erat,
						auctor in mi quis, ultrices imperdiet mi. Donec sed metus ut lacus
						rhoncus scelerisque. Pellentesque id mi vel eros aliquam tempus.
						Proin sodales, erat in rhoncus iaculis, purus arcu euismod felis, a
						pretium lectus dui eget tellus. Duis vitae mauris vitae ipsum varius
						vehicula. Nam tempor bibendum nulla, eu interdum tellus scelerisque
						sed.
					</p>
					<p>
						Quisque aliquam tellus non ultrices auctor. Ut id quam et ipsum
						elementum sodales. Donec non arcu augue. Proin porta a nisi et
						aliquam. Maecenas vestibulum placerat orci, a ullamcorper ligula.
						Suspendisse erat enim, facilisis ut interdum luctus, consectetur eu
						magna. Praesent augue tellus, mattis non dignissim quis, varius sit
						amet purus. Proin sodales interdum turpis eu malesuada. Fusce sem
						purus, accumsan at semper quis, posuere sit amet eros. Nam a augue
						ante.
					</p>
					<p>
						Integer dui ligula, laoreet quis sodales id, sagittis quis enim.
						Cras porta, tellus eget tincidunt egestas, elit erat varius augue,
						vitae vulputate urna metus ac ante. Morbi diam augue, venenatis
						accumsan tincidunt vitae, finibus ut lorem. Maecenas varius, eros in
						sollicitudin elementum, nisl est semper nibh, et ullamcorper orci
						metus ut urna. Sed porta odio sapien. Maecenas at turpis ultrices,
						fermentum metus sit amet, fringilla urna. Nam eu nulla est.
						Phasellus sed maximus ligula, non maximus augue. Aenean cursus vitae
						ligula eget accumsan. Vivamus a ex arcu. Donec purus purus, rhoncus
						a pretium eu, ultricies eget sapien. Donec malesuada venenatis
						magna, a vulputate dolor posuere sit amet.
					</p>
					<p>
						Praesent mi felis, consectetur cursus volutpat vel, accumsan et
						dolor. Donec mauris quam, suscipit at augue convallis, varius
						accumsan metus. Mauris hendrerit justo a laoreet porta. Aenean dolor
						est, hendrerit at ante sit amet, luctus vestibulum urna. Sed eu nisl
						ornare, hendrerit leo sit amet, accumsan velit. Nullam aliquet mi ac
						sapien pretium, at ultrices justo sodales. Maecenas tempor maximus
						erat at sagittis. Fusce at vulputate mi.
					</p>
					<p>
						In tristique, ante non semper lobortis, lorem augue luctus turpis,
						eget semper enim ipsum quis felis. Donec sed blandit purus. Maecenas
						consequat, velit eget luctus gravida, ipsum quam tincidunt libero,
						ut porta mauris dui nec nisl. Donec vel dignissim metus. Donec
						accumsan leo ut euismod suscipit. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Vivamus iaculis pharetra purus, sed
						porta urna. Fusce accumsan arcu justo. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Etiam ullamcorper facilisis massa, non
						suscipit lacus semper eleifend. Pellentesque luctus ligula vel
						tempus egestas. Maecenas et venenatis nunc. Interdum et malesuada
						fames ac ante ipsum primis in faucibus. Nulla felis sem, tincidunt
						consectetur ex ac, aliquet tempus leo. Maecenas eu commodo ex.
						Curabitur porta, erat sit amet rutrum posuere, mi sapien vehicula
						sem, blandit iaculis dui nunc vitae nisl.
					</p>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import NavBar from "./NavBar";

export default {
	name: "Test",
	components: {
		NavBar
	},
	data: function() {
		return {
			title: "Test"
		};
	}
};
</script>
