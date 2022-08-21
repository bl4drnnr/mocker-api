import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';
import { Post } from '../../entities/post.entity';

export default class CreatePosts implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Post)
      .values([
        {
          title: 'Nam fringilla volutpat venenatis. Nulla et sem.',
          content:
            'Aliquam tristique tristique dui, vel varius diam suscipit vitae. Suspendisse vel libero mi. Sed orci enim, molestie sit amet imperdiet quis, condimentum in ligula. Praesent et tortor id ante fringilla gravida. Proin ultrices ipsum non ultricies tempor. Nam pulvinar ipsum erat, id aliquam ligula pretium a. Proin eu urna felis. Maecenas at sem ac eros aliquam hendrerit vitae quis tortor.',
          preview: 'p1',
          user: () => '1'
        },
        {
          title: 'Sed finibus, magna id vestibulum bibendum, sem.',
          content:
            'Maecenas blandit sapien eros, vel gravida libero ultricies in. Aenean maximus purus felis, sed interdum augue molestie pellentesque. Sed pretium erat mi, non viverra erat varius ac. Ut non congue velit. Vestibulum a lobortis dolor. Maecenas ac elit quis ipsum facilisis interdum. Maecenas et mollis massa. Proin viverra porttitor metus, non gravida dui ullamcorper vitae. Aliquam erat volutpat. Donec rhoncus.',
          preview: 'p2',
          user: () => '2'
        },
        {
          title: 'Etiam euismod mattis sem, id laoreet metus.',
          content:
            'Phasellus luctus massa nulla, sit amet sodales odio tristique hendrerit. Aenean in turpis et urna maximus viverra non vitae metus. Sed luctus a ex ac malesuada. Suspendisse eget mi vitae urna iaculis luctus non malesuada leo. Cras egestas ligula et leo mattis, iaculis imperdiet ante consectetur. Praesent et porta nisi. Donec quis viverra tortor. Vestibulum ante ipsum primis in faucibus.',
          preview: 'p3',
          user: () => '3'
        },
        {
          title: 'Donec sit amet magna et nulla ultrices.',
          content:
            'Ut ligula felis, molestie ac urna at, ultrices euismod mi. Etiam tempor lacinia eleifend. Nulla facilisi. Mauris eu consequat ex, sed dictum orci. Nunc volutpat sapien ut cursus euismod. Vivamus lacinia risus nec efficitur lacinia. Phasellus aliquam aliquet laoreet. Integer vestibulum massa odio, nec tincidunt lectus suscipit vitae. In maximus, velit non consequat malesuada, urna massa condimentum dolor, sit amet.',
          preview: 'p4',
          user: () => '4'
        },
        {
          title: 'Nullam nec quam dictum, blandit lacus eget.',
          content:
            'Sed sit amet pellentesque enim, eu egestas nulla. Nunc ornare nulla est, eget pharetra turpis efficitur porttitor. Mauris dui quam, tempor mollis turpis sed, rhoncus consequat est. Pellentesque velit libero, placerat id faucibus sit amet, maximus in risus. Proin faucibus justo gravida massa condimentum, at scelerisque nisl porttitor. Aenean luctus condimentum mi nec bibendum. Vivamus tempor tellus id urna volutpat.',
          preview: 'p5',
          user: () => '5'
        },
        {
          title: 'Ut pellentesque consequat mi ac consectetur. In.',
          content:
            'Nunc id egestas massa, vitae iaculis purus. Maecenas pretium diam et mi lobortis, ullamcorper eleifend velit porta. Maecenas nec tortor pellentesque, dictum elit eu, vehicula erat. Maecenas dictum mi lacus, in consectetur leo pharetra at. Morbi vestibulum, sapien vel finibus ultrices, nibh neque volutpat erat, imperdiet facilisis tellus ante in tortor. Proin faucibus cursus risus vitae consequat. Suspendisse pellentesque congue.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Nunc sit amet pellentesque tellus. Interdum et.',
          content:
            'Phasellus mattis neque quis pellentesque lobortis. Integer dolor justo, feugiat a purus eget, vulputate posuere risus. Ut et viverra odio. Nulla a elit bibendum, imperdiet purus vitae, bibendum tellus. Fusce convallis sagittis nisi, tincidunt venenatis ante vehicula non. Donec nisi sem, bibendum vel sapien vel, auctor ornare elit. Curabitur bibendum massa quis mauris facilisis, quis scelerisque mauris sagittis. Suspendisse pellentesque.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Phasellus efficitur lacus neque, sed bibendum risus.',
          content:
            'Sed quis ipsum a elit porta pellentesque. Aenean efficitur nec tellus vitae vehicula. Fusce in diam ut lorem ornare vulputate. Fusce sit amet tortor venenatis, feugiat erat quis, euismod metus. Ut finibus suscipit turpis vel semper. Phasellus vel dui euismod, aliquet felis a, porttitor nisl. Donec ut consequat nisi. Morbi maximus mauris enim, ut pretium risus ultricies ut. Cras placerat.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Proin hendrerit ante dui, a dictum odio.',
          content:
            'Pellentesque tempus orci at sapien suscipit porta. Maecenas luctus dapibus orci. Integer quis mollis libero. Aliquam dictum risus et diam dictum mattis. Donec accumsan placerat dapibus. Nulla id est nec orci lacinia ornare. Ut et tortor est. Vivamus urna leo, feugiat id viverra quis, pretium quis est. Praesent semper quis dui eu cursus. Lorem ipsum dolor sit amet, consectetur adipiscing.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Nunc feugiat vel velit et feugiat. Nullam.',
          content:
            'Nulla dictum scelerisque bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam consectetur neque eget dapibus tincidunt. Nullam posuere, lacus vel semper vestibulum, justo tortor placerat dolor, at auctor mi nibh sit amet arcu. Integer et arcu neque. Vivamus commodo elit felis, sed tristique nunc pretium maximus. Aenean nec ex felis. Pellentesque ac metus.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Quisque sit amet iaculis massa. Duis finibus.',
          content:
            'Pellentesque eget ultrices nisl. Sed et ex scelerisque, pulvinar purus ac, laoreet ex. Sed finibus interdum pretium. Vivamus et turpis massa. Cras quis nibh neque. Aenean sit amet aliquet velit. Sed accumsan lobortis nisi eu consequat.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Ut interdum diam id mollis fringilla. Nullam.',
          content:
            'Pellentesque eget ultrices nisl. Sed et ex scelerisque, pulvinar purus ac, laoreet ex. Sed finibus interdum pretium. Vivamus et turpis massa. Cras quis nibh neque. Aenean sit amet aliquet velit. Sed accumsan lobortis nisi eu consequat.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Etiam sollicitudin non justo non laoreet. Pellentesque.',
          content:
            'Proin sed finibus lectus, vel efficitur magna. Ut auctor placerat semper. Vivamus lorem tortor, aliquam in risus a, molestie ornare enim. Proin accumsan, diam id accumsan fringilla, erat magna suscipit ipsum, at laoreet erat leo ac neque. Sed arcu magna, mattis feugiat risus sed, ullamcorper consequat urna. Nunc sed tempus nunc. Vivamus ligula tortor, accumsan ac ex at, tincidunt dapibus.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Praesent vitae nisl id dui molestie suscipit.',
          content:
            'In vestibulum metus eget ultricies placerat. Maecenas non mauris et eros pharetra consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer gravida, libero ut faucibus mollis, lectus libero auctor velit, sit amet mollis mi nisi at eros. Quisque tempus luctus auctor. Suspendisse potenti. Aenean urna sem, placerat at pellentesque vitae, fermentum sed odio. Quisque.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Pellentesque tincidunt, dolor eu ornare varius, nunc.',
          content:
            'Fusce tempus metus ac varius mollis. Nulla commodo augue eu ipsum suscipit auctor. Pellentesque sollicitudin, elit nec ultrices consectetur, dui lorem laoreet nisi, vel maximus neque mauris at ante. Vivamus feugiat elit eget quam porta dictum. Fusce in massa tortor. Sed dictum laoreet rutrum. Nulla odio orci, congue in massa et, lacinia rutrum dui. Curabitur ultrices aliquet sapien fermentum porta.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Vivamus egestas nisi et risus mollis faucibus.',
          content:
            'Proin sed pulvinar nunc. Suspendisse pharetra quis dui ut consequat. Morbi ac mollis nisi, in viverra nisl. Fusce lacus sapien, sagittis fermentum est a, varius tincidunt velit. Nunc tempus neque vitae mi commodo aliquet. Cras at pretium tellus. In dictum dui ac tortor accumsan porta. Morbi aliquam leo eu volutpat blandit. In mollis tortor arcu, a tincidunt sapien pretium quis.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Sed arcu sapien, suscipit id tortor vitae.',
          content:
            'Etiam pulvinar nunc vitae erat varius, faucibus laoreet turpis interdum. Nam eu orci at arcu blandit scelerisque in porta turpis. Etiam varius, nulla a finibus commodo, tortor urna pharetra augue, eu egestas lorem massa sit amet urna. Donec ipsum turpis, pharetra sit amet libero sed, facilisis luctus eros. In hac habitasse platea dictumst. Suspendisse sed pharetra nisi, eu pellentesque felis.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Vestibulum consequat quis orci nec euismod. Etiam.',
          content:
            'Morbi vestibulum non neque nec consectetur. Aenean non risus eu lectus porttitor facilisis vel at quam. Mauris laoreet lorem sit amet scelerisque porta. Sed rutrum libero nunc, id luctus ipsum sagittis ac. Mauris dictum tincidunt velit, sed congue nunc egestas sed. In cursus quis ex quis consequat. Mauris eu lorem sollicitudin, efficitur nisl at, tristique leo. Duis sit amet euismod.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Vivamus nec sem magna. Praesent consequat pretium.',
          content:
            'Nulla eget risus vitae metus fermentum dapibus. Sed rhoncus vulputate tempus. Cras tempor eu ligula sit amet sodales. Donec a sapien eget turpis accumsan blandit. Aliquam bibendum bibendum eros, sit amet lacinia augue cursus non. Proin aliquam consequat volutpat. Curabitur semper purus et sapien consequat porta. Praesent eleifend, nisi ac egestas rutrum, quam turpis mollis leo, id faucibus arcu sapien.',
          preview: 'p6',
          user: () => '6'
        },
        {
          title: 'Integer in vulputate velit. Nullam id quam.',
          content:
            'Nunc gravida lacus et orci placerat hendrerit. Suspendisse lobortis convallis metus nec facilisis. Vivamus id enim pharetra, egestas leo non, laoreet diam. Quisque condimentum tempor lacinia. Curabitur efficitur elementum enim ut consectetur. Cras at tortor id tellus tempus blandit eget vel diam. Sed lectus lacus, eleifend sed tortor sed, commodo pretium libero. Vestibulum id est ex. Nulla elementum congue est.',
          preview: 'p6',
          user: () => '6'
        }
      ])
      .execute();
  }
}
