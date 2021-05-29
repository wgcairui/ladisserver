import { Prop } from "@typegoose/typegoose";

/**
 * 友情链接
 */
export class LinkFrend {
    @Prop()
    public name: string

    @Prop()
    public link: string
}


/**
 * 代理商网站运行配置
 */
export class AgentConfig {
    @Prop()
    public name: string

    @Prop()
    public url: string

    @Prop({ default: true })
    public share: boolean

    @Prop()
    public port: number

    @Prop()
    public hm: string

    @Prop()
    public logoType: string

    @Prop({ default: () => "/logo.png" })
    public logoValue: string

    @Prop()
    public beian: string

    @Prop()
    public wangan: string

    @Prop()
    public title: string

    @Prop()
    public metaKeywords: string

    @Prop()
    public metaDescription: string

    @Prop()
    public contactQQ: string

    @Prop({ type: () => [String] })
    public contactTel: string[]

    @Prop()
    public contact400: string

    @Prop({ type: () => [String] })
    public tml: string

    @Prop({ default: true })
    public showProduct: boolean

    @Prop({ default: false })
    public showBuy: boolean

    @Prop({ default: true })
    public showCase: boolean

    @Prop({ default: true })
    public showNews: boolean

    @Prop({ default: false })
    public showLaungua: boolean
}