<template>

    <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">Admin Dashboard</div>
              <div class="card-body">
                
                    <div class="row">
                        <div class="col-md-2">
                          
                            <ul>
                              <li>
                                <router-link to="/admin/dashboard">Admin Profile
                                </router-link>
                              </li>
                              <li>
                                <router-link to="/admin/events">Events
                                </router-link>
                              </li>
                            </ul>

                        </div>
                        <div class="col-md-10">
                                
                          <router-view></router-view>

                        </div>
                    </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    
    </template>
    
    <script setup>

    </script>