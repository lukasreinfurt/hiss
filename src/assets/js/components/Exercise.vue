<template>
	<BaseLayout class="exercise">
		<template slot="header">
			<NavBar :title="title"></NavBar>
		</template>
		<template slot="main">
			<div class="exercise__contentWrapper contentWrapper">
				<div class="exercise__contentContainer contentContainer">
					<input v-model="name" placeholder="Exercise Name" />
					<select v-model="equipment">
						<option>machine</option>
						<option>free-weight</option>
						<option>bodyweight</option>
					</select>
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";

export default {
	name: "Exercise",
	components: {
		BaseLayout,
		NavBar
	},
	props: {
		id: {
			type: String,
			default: function() {
				return "";
			}
		}
	},
	data: function() {
		return {
			title: "Exercise"
		};
	},
	computed: {
		exercise() {
			return this.$store.state.exercises.exercises[this.id];
		},
		name: {
			get() {
				return this.$store.state.exercises.exercises[this.id].name;
			},
			set(value) {
				this.$store.commit("exercises/updateName", {
					id: this.id,
					value: value
				});
			}
		},
		equipment: {
			get() {
				return this.$store.state.exercises.exercises[this.id].equipment;
			},
			set(value) {
				this.$store.commit("exercises/updateEquipment", {
					id: this.id,
					value: value
				});
			}
		}
	}
};
</script>
