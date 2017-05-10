<template>
  <div>
    <div class="banner">
      <img src="../assets/icon.png" class="icon">
      <span>华南农业大学第三十一次学生代表大会&nbsp&nbsp 倒计时:{{time}}s</span>
      <div style="clear:both;"></div>
    </div>
    <div>
      <el-row v-for="i in candidate">
        <div v-for="j in i">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="j.src" class="image">
                <div style="padding: 14px;">
                  <span>{{j.name}} </span>
                  <div class="bottom clearfix">
                    <time class="time">{{ '得票数：'+j.good }}</time>
                    <div style="clear:both;"></div>
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="Number(j.good)/4"
                                 status="success" style="margin-top: 0.3rem"></el-progress>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentDate: new Date(),
        candidate: [
          [
            {
              uid: '1',
              name: '我的名字',
              good: '100',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            }
          ],
          [
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            }
          ],
          [
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            }
          ],
          [
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            },
            {
              uid: '',
              name: '加载中...',
              good: '加载中...',
              src: 'http://opqi4h4yx.bkt.clouddn.com/photo.jpg'
            }
          ]
        ],
        time: '加载中'
      }
    },
    mounted () {
      var update = () => {
        var strtime = '2017-06-3 00:45:00'
        var date = new Date(strtime)
        var all = date.getTime()
        var dateNow = new Date()
        var now = dateNow.getTime()
        var time = parseInt((all - now) / 1000)
        if (time >= 0) {this.time = time}
        else this.time = 0
      }
      (setInterval(update, 500))()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 3rem;
    line-height: 12px;
  }

  .image {
    width: 50%;
    display: block;
    float: left;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .banner {
    width: 100%;
    background: red;
    text-align: center;
  }

  .icon {
    width: 6rem;
    float: left;
  }

  .banner span {
    font-size: 2rem;
    padding-top: 2rem;
    float: left;
  }


</style>
