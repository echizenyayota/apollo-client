<template>
  <v-app>
    <v-main>
      <div id='block'>

        <v-row 
        style='width: 550px'
        >

          <!-- ツールバー -->
          <v-toolbar color='grey lighten-1'>
            <v-tool-bar-title>本棚</v-tool-bar-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-1" @click='showDialogueNew'>新規追加</v-btn>
          </v-toolbar>

          <!-- 本棚の中身 -->
        <div 
        v-for='post in posts' :key='post.id'
        >

          <v-card
            class='mx-auto'
            width='550ox'
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  {{ post.title }}/{{post.author}}
                </v-list-item-title>
                <v-list-item-subtitle>From Apollo Server</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- 編集・削除ボタン -->
            <v-card-actions>
              <v-btn
                color='success'
                small
              >
                <v-icon small>
                  編集する
                </v-icon>
              </v-btn>
              <v-btn
                color='error'
                small
                @click='deletePost(post.id, post.title)'
              >
                <v-icon small>
                  削除する
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { ALL_POSTS, AlL_POSTS } from '../graphql/query';

export default {
  name: 'Post',
  data: () => ({
    // 本棚の中身を定義
    posts: [],
  }),
  apollo: {
    // 本棚の中身
    posts: {
      // クエリを書いている部分
      query: ALL_POSTS,
    },
  }, 
  methods: {}, 
};
</script>

<style>

  #block {
    text-align: center;
    display: inline-block;
  }


</style>
