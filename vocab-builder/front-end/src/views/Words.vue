<template>
    <div>
        <h1>Words</h1>
        <p><strong>Total Words:</strong> {{ words.length }}</p>
        <table id="words" class="ui celled compact table">
            <thead>
                <tr>
                    <th><i class="united kingdom flag"></i>English</th>
                    <th><i class="germany flag"></i>German</th>
                    <th><i class="vietnam flag"></i>Vietnamese</th>
                    <th colspan="4"></th>
                </tr>
            </thead>
            <tr v-for="(word,i) in words" :key="i">
                <td>{{ word.english }}</td>
                <td>{{ word.german }}</td>
                <td>{{ word.vietnam }}</td>
                <td width="75" class="center aligned">
                <router-link :to="{ name: 'show', params:{ id: word._id}}">Show</router-link></td>
                <td width="75" class="center aligned">
                <router-link :to="{ name: 'edit', params:{ id: word._id}}">Edit</router-link></td>
                <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)">
                    <a :href="`/words/${word._id}`">Destroy</a></td>
            </tr>
        </table>
        <a href="/test" class="cta-button">Testing</a>
    </div>
</template>

<script>
    import { api } from '../helpers/helpers';

    export default {
        name: 'words',
        data() {
            return {
                words: []
            };
        },
        methods: {
            async onDestroy(id) {
                const sure = window.confirm('Are you sure?');
                if (!sure) return;
                await api.deleteWord(id);
                this.flash('Word deleted sucessfully!', 'success');
                const newWords = this.words.filter(word => word._id !== id);
                this.words = newWords;
            }
        },
        async mounted() {
            this.words = await api.getWords();
        }
    };
</script>

<style scoped>
p {
    font-size: 16px;
    margin-bottom: 10px;
    color: #333;
}
</style>
