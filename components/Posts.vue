<!-- ./components/Posts.vue -->
<template>
<section class="container">

    <div class="navy-line"></div>
      <h1 class="h1">        
         {{ $t('Filosofia') }}          
        </h1>
      <h2 class="subtitle">
        {{ $t('welcome') }}
      </h2>
    <div class="box">
        <div class="container">
            <div class="row">

            <div class="col-6"  v-for="post in posts" :key="post.id">
                    <div class="card mt-3 tab-card">
                        <div class="card-header tab-card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <span>{{ post.published }}</span>
                            </li>                      
                        </ul>
                        </div>

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                <h5 class="card-title">{{ post.title }}</h5>
                                <p class="card-text">{{ post.summary }}</p>
                                <nuxt-link :to="`/blog/${post.id}`"
                                    class="btn btn-primary">
                                    Detalle
                                </nuxt-link>              
                            </div>
                        </div>
                    </div>
                </div>

        </div>



    </div>
    </div>

</section>
</template>

<script>
  import posts from '~/posts.json'

  export default {
    name: 'posts',
    data () {
      return { posts }
    }
  }
</script>

<style>

.card {
    background-color: #ffffff;
    border: 1px solid rgba(0, 34, 51, 0.1);
    box-shadow: 2px 4px 10px 0 rgba(0, 34, 51, 0.05), 2px 4px 10px 0 rgba(0, 34, 51, 0.05);
    border-radius: 0.15rem;
}

/* Tabs Card */

.tab-card {
  border:1px solid #eee;
}

.tab-card-header {
  background:none;
}
/* Default mode */
.tab-card-header > .nav-tabs {
  border: none;
  margin: 0px;
}
.tab-card-header > .nav-tabs > li {
  margin-right: 2px;
}
.tab-card-header > .nav-tabs > li > a {
  border: 0;
  border-bottom:2px solid transparent;
  margin-right: 0;
  color: #737373;
  padding: 2px 15px;
}

.tab-card-header > .nav-tabs > li > a.show {
    border-bottom:2px solid #007bff;
    color: #007bff;
}
.tab-card-header > .nav-tabs > li > a:hover {
    color: #007bff;
}

.tab-card-header > .tab-content {
  padding-bottom: 0;
}
</style>